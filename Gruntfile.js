module.exports = function(grunt) {

	// measures the time each task takes
	require('time-grunt')(grunt);

	// load grunt config
	require('load-grunt-config')(grunt, {
		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 5, // maximum number of notifications from jshint output
				title: "Project Name", // defaults to the name in package.json, or will use project directory's name
				success: false, // whether successful grunt executions should be notified automatically
				duration: 3 // the duration of notification in seconds, for `notify-send only
			}
		}
	});
};