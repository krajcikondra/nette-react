<?php

namespace App\WebSocketModule\Controllers;

use IPub;

class CarController extends \IPub\WebSockets\Application\Controller\Controller
{

	public function actionSubscribe(IPub\WebSockets\Entities\Clients\IClient $client, IPub\WebSocketsWAMP\Entities\Topics\ITopic $topic, int $carId)
	{
		// All route parameters could be passes as action parameters

		$topic->broadcast($client->getId() .' joined: '. $carId);
	}

	public function actionUnsubscribe(IPub\WebSockets\Entities\Clients\IClient $client, IPub\WebSocketsWAMP\Entities\Topics\ITopic $topic, int $carId)
	{
		$topic->broadcast($client->getId() .' left: '. $carId);
	}

	public function actionPublish($event, IPub\WebSocketsWAMP\Entities\Topics\ITopic $topic, IPub\WebSockets\Entities\Clients\IClient $client)
	{
		// $event could be string or instance of \stdClass, it depends on what your client send to the server

		$topic->broadcast($client->getId() .' is saying: '. $event);
	}

}