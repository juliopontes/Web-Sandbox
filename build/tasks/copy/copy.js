/*
 * Grunt Task File
 * ---------------
 *
 * Task: copy
 * Description: Copy files.
 * Dependencies: None
 *
 */

task.registerBasicTask("copy", "Copy files...", function(data, pattern)
{
	// Make sure the destination folders exist.
	data.dest.map(function(out){
		file.mkdir(out);
	});

	// Expand the files to copy.
	var files = file.expand(pattern);

	// Copy the files from the source to destination paths.
	files.map(function(path){
		data.dest.map(function(out){
			file.write(path.replace(data.src, out), file.read(path));
		});
	});

	// Fail task if errors were logged.
	if (task.hadErrors())
	{
		return false;
	}
});
