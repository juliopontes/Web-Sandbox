/*
 * Grunt Task File
 * ---------------
 *
 * Task: JST
 * Description: Compile underscore templates to JST file
 * Dependencies: None
 *
 */

task.registerBasicTask("jst", "Compile underscore templates to JST file", function(data, name)
{
	// If namespace is specified use that, otherwise fallback
	var namespace = config("meta.jst.namespace") || "JST";
	// If template settings are available use those
	var templateSettings = config("meta.jst.templateSettings") || null;

	// Create JST file.
	var files = file.expand(data);
	file.write(name, task.helper("jst", files, namespace, templateSettings));

	// Fail task if errors were logged.
	if (task.hadErrors())
	{
		return false;
	}

	// Otherwise, print a success message.
	log.writeln("File \"" + name + "\" created.");
});

task.registerHelper("jst", function(files, namespace, templateSettings){
	// Require the handlebars library.
	var Handlebars = require("handlebars");

	// Create the beginning of the output file.
	var tmp = file.read(__dirname + '/handlebars.js') + "\n\n";

	// Compile the template and get the function source
	tmp += files ? files.map(function(filepath){
		// Precompile the template.
		var out = Handlebars.precompile(file.read(filepath));

		return "Handlebars.templates['" + filepath.replace('assets/tmpl/', '').replace('.html', '') + "'] = Handlebars.template(" + out + ")";
	}).join("\n\n") : "";

	return tmp;
});
