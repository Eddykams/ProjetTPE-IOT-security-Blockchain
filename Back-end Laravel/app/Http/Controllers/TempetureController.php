<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\tempeture;

class TempetureController extends Controller
{
    //
    public function getTempeture()
    {
        $tempeture = DB::table('tempetures')->orderBy('temps', 'asc')->get();

        return $tempeture;
    }
    public function postTempeture(Request $request)
    {
        /*
        $this->validate($request, [
            'tempeture' => 'integer',
            'localisation' => 'max:255',
            'etat' => 'boolean',
        ]);
        */
        $product = tempeture::create($request->all());
     
            return response()->json($product, 201);
    }
}
