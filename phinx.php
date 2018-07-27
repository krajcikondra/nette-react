<?php

/** @var \Nette\DI\Container $container */
$container = require_once(__DIR__ . '/app/bootstrap.php');
$parameters = $container->getParameters();


$dbParameters = $parameters['db'];

$devDB = [
	'adapter' => 'mysql',
	'name' => $dbParameters['name'],
	'host' => $dbParameters['host'],
	'user' => $dbParameters['user'],
	'pass' => $dbParameters['password'],
	'port' => $dbParameters['port'],
	'charset' => 'utf8'
];

return [
	'paths' => [
		'migrations' => __DIR__ . '/migrations',
	],
	'environments' => [
		'default_migration_table' => '_phinx_log',
		'default_database' => 'development',

		// Development
		'development' => $devDB
	]
];