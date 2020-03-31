const Bag = require('../processes/bag');
const Game = require('../models/game');

const createGame = async (req, res) => {
    try {
        const game = await new Game({
            "title" : "",
            "bag" : Bag.newBag(),
            "draws" : []
        })
        await game.save()
        return res.status(201).json({
            game
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const bag = async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);
        const bag = game.bag;
        return res.status(201).json({ bag });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const draw = async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);
        game.draws.push(Bag.draw(game.bag, req.params.num));
        await game.save();
        return res.status(201).json({ game });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}

const undo = async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);
        let undo = game.draws.splice(game.draws.length-1, 1)[0];
        undo.forEach(tile => game.bag.push(tile));
        console.log(game);
        await game.save();
        return res.status(201).json({ game });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}

const trade = async (req, res) => {
    console.log(req);
    try {
        const trade = req.body;
        console.log(typeof(trade), trade);
        const game = await Game.findById(req.params.gameId);
        game.draws.push(Bag.draw(game.bag, trade.length));
        trade.forEach(tile => game.bag.push(tile));
        console.log(game);
        await game.save();
        return res.status(201).json({ game });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}

const settings = async (req, res) => {
    try {
        const game = await Game.findById(req.params.gameId);
        const latestDraws = game.draws.slice(game.draws.length > 5 ? -5 : game.draws.length * (-1));
        const settings = {
            latestDraws: latestDraws.map(draw => draw.length),
            latestDraw: latestDraws[latestDraws.length - 1]
        };
        return res.status(201).json({ settings });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    createGame,
    bag,
    draw,
    undo,
    trade,
    settings
}