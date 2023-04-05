<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(){
        return Cart::all();
    }
    public function store(Request $request){
        $table = new Cart();
        $table->userId = $request->userId;
        $table->bookId = $request->bookId;
        $table->count = $request->count;
        $table->save();

        return $table;
    }

    public function destroy($id){
        $table = Cart::find($id);
        $table->delete();
    }

    public function update($id){
        $table = Cart::find($id);
        $table->count = $request->count;
        $table->update();
    }

}
