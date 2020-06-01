import express, { Request, Response } from 'express';
import AutoTutorData from 'models/AutoTutorData';
//import AutoTutorOutput from "models/AutoTutorOutput";

const router = express.Router({ mergeParams: true });

//This is the array that has hardcoded dialogs
var dialogs = [
    'What are the challenges to demonstrating integrity in a group?',
    'OK. Consider this. How can it affect you when you correct someone\'s behavior?',
    'Good. Peer pressure can push you to allow and participate in inappropriate behavior. When you correct somone\'s behavior, you may get them in trouble or negatively impact your relationship with them.\n However, integrity means speaking out even when it is unpopular.\n'
];



router.post('/', (req: Request, res: Response) => {

    //if there is no session ID, send error.
    if(req.body['Id'] == null) {
        res.status(400)
            .send();
        return;
    }

    //session start packet
    var jsonData = {
        'Id': req.body['Id'],
        'User': req.body['User'],
        'UseDB': req.body['UseDB'],
        'ScriptXML': req.body['ScriptXML'],
        'LSASpaceName': req.body["LSASpaceName"],
        'ScriptURL': req.body['ScriptURL']
    };

    //TODO: add in mechanics to extract prompt question from the script itself



    var atd = new AutoTutorData();

    // var ato = new AutoTutorOutput();

    //reset the turn when new session is started
    //currentTurn = 0;

    res.send({
        status: 'ok',
        "data": atd.convertToJson(),
        'dialog': dialogs[0],
        'turn': 0
    });
});

// TODO: session history needs to be implemented
// currently using a variable to track the turn instead
// var currentTurn = 0;

router.post('/dialog', (req: Request, res: Response) => {
    //if there is no turn number, send error.
    if(req.body['turn'] == null) {
        res.status(400)
            .send();
        return;
    }
    console.log('User says:  ' + req.body['message'])
    var turn = req.body['turn'];
    res.send({
        status: 'ok',
        'dialog': dialogs[turn],
        'turn': turn
    });
});






export default router;