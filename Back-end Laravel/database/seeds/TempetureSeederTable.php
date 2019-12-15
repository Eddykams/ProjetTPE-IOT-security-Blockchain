<?php

use Illuminate\Database\Seeder;
use App\tempeture;

class TempetureSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            tempeture::create([
                'tempeture' => $faker->randomNumber(2),
                'localisation' => "Hanoi",
                'dateheure' => now(),
                'etat' => 0
            ]);
        }
    }
}
