<?php

namespace App\Presenters;

use Nette;
use Tracy\Debugger;


class HomepagePresenter extends Nette\Application\UI\Presenter
{

	/** @var  Nette\Database\Context @inject */
	public $context;

	public function actionFindCars() {
		$data = [];
		foreach ($this->context->table('car')->fetchAll() as $row) {
			$data[] = [
				'id' => $row->id,
				'brand' => $row->vendor,
				'model' => $row->model,
				'year' => $row->year,
				'km' => $row->km,
				'details' => FALSE,
			];
		}

		$this->presenter->payload->cars = $data;
		$this->presenter->sendPayload();
	}

	public function actionAddCar($vendor, $model, $year, $km) {
		$row = $this->context->table('car')->insert([
			'vendor' => $vendor,
			'model' => $model,
			'year' => $year,
			'km' => $km,
		]);
		$this->presenter->payload->id = $row->id;
		$this->presenter->sendPayload();
	}


	public function actionRemoveCar($id) {
		$this->context->table('car')->where('id', $_GET['id'])->delete();
		$this->presenter->payload->result = TRUE;
		$this->presenter->sendPayload();
	}

	public function actionEditCar($id, $vendor, $model, $year, $km) {
		$this->context->table('car')
			->where('id', $_GET['id'])
			->update([
				'vendor' => $vendor,
				'model' => $model,
				'year' => $year,
				'km' => $km,
		]);
		$this->presenter->payload->result = TRUE;
		$this->presenter->sendPayload();
	}

}
