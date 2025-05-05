const addAction = (stateValueName) => {
	return (payload2) => {
		return {
			type: `${stateValueName}/ADD`,
			payload: structuredClone(payload2),
			actionType: 'ADD',
		};
	};
};

const addManyAction = (stateValueName) => {
	return (payload2) => {
		return {
			type: `${stateValueName}/ADD_MANY`,
			payload: structuredClone(payload2),
			actionType: 'ADD_MANY',
		};
	};
};

const updateAction = (stateValueName) => {
	return (payload2) => {
		return {
			type: `${stateValueName}/UPDATE`,
			payload: structuredClone(payload2),
			actionType: 'UPDATE',
		};
	};
};

const deleteAction = (stateValueName) => {
	return (payload2) => {
		return {
			type: `${stateValueName}/DELETE`,
			payload: structuredClone(payload2),
			actionType: 'DELETE',
		};
	};
};

const loadAction = (stateValueName) => {
	return (payload2) => {
		return {
			type: `${stateValueName}/LOAD`,
			payload: structuredClone(payload2),
			actionType: 'LOAD',
		};
	};
};

export { addAction, deleteAction, loadAction, updateAction, addManyAction };
