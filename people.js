const router = require('express').Router();

let people = [
	{
		id   : 1,
		name : 'Bryce',
	},
	{
		id   : 2,
		name : 'Dakota',
	},
	{
		id   : 3,
		name : 'Jamie',
	},
];
let chores = [
	{
		id          : 1,
		description : 'Have friends',
		assignedTo  : 1,
		completed   : false,
	},
	{
		id          : 2,
		description : 'Stop annoying other humans',
		assignedTo  : 3,
		completed   : false,
	},
	{
		id          : 3,
		description : 'Give papa panzer quick revive',
		assignedTo  : 2,
		completed   : true,
	},
	{
		id          : 4,
		description : 'WEBAPISTOPS',
		assignedTo  : 2,
		completed   : false,
	},
	{
		id          : 5,
		description : 'Get dakota to look at the bryce duder and be like I want his money',
		assignedTo  : 1,
		completed   : false,
	},
];







//======================================//
//GEt 
router.get('/chores', (req, res) => {
//     var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]


	if (completed) {
		const filter = completed === 'true' ? true : false;
		const filtered = chores.filter(chore => chore.completed === filter);
		res.status(201).json(filtered);
	} else {
		res.status(201).json(chores);
	}
});
router.get('/people', (req, res) => {
	res.status(200).json(people);
});
router.get('/people/chores/:id', (req, res) => {
    //personId was brought to you by Number gang, buh BYE parseINT
	const personId = Number(req.params.id);
	const choreDescription = req.body.description;
	if (personId && !choreDescription) {
		const chore = chores.filter(chore => chore.assignedTo === personId);
		res.status(200).json(chore);
	} else {
		res.status(404).json({
			message : "Doesn't exist like dakotas love for bryce omega lul bryce you don't got ice don't make me say it twice you ugly , nah I wanna say it thrice bc im not nice",
		});
	}
});
//=========================================//
//Pst
router.post('/chores', (req, res) => {
	addChore = req.body;
	if (req.body.description && req.body.completed && req.body.id && req.body.assignedTo) {
		chores.push(addChore);
		res.status(200).json(addChore);
	} else {
		res.status(400).json({ message: 'YOU NEED ALL THE STUFF' });
	}
});
// var array1 = [5, 12, 8, 130, 44];

// function isLargeNumber(element) {
//   return element > 13;
// }

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3

router.put('/chores/:id', (req, res) => {
    //Checks if paramsID === choreID
	const choreId = Number(req.params.id);
	req.body.id = choreId;
	const correctId = chores.findIndex(chore => chore.id === choreId);
	if (correctId !== -1) {
		chores.splice(correctId, 1, req.body);
		res.status(200).json({ message: 'Changes is a good song by NF btw you also changed the data' });
	} else {
		res.status(404).json({ message: 'You failed to change as you have so many times in your life' });
	}
});

// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']








router.delete('/chores/:id', (req, res) => {
	const choreId = Number(req.params.id);
	req.body.id = choreId;
	const correctId = chores.findIndex(chore => chore.id === choreId);
	if (correctId != -1) {
		chores.splice(correctId, 1);
		res.status(201).json({ message: 'Yeet skeet happiness delete' });
	} else {
		res.status(404).json({ message: 'HELP ME PAPA ' });
	}
});

module.exports = router;
