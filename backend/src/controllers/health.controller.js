const healthCheck = (req, res) => {
	return res.status(200).json({
		uptime: process.uptime(),
		time: Date.now(),
		service: 'DevStream',
	});
};

export { healthCheck };
