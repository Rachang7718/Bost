<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Users;

class UsersController extends Controller
{
    public function registration(Request $request){
        $table = new Users();
        $password1 = $request->password1;
        $password2 = $request->password2;
        if($table->email === $request->email && $table->username === $request->username && $password1 != $password2)
        {
            return response()->json(['message' => 'Registration failed']);
        } else {
            if($password1 == $password2){
                $matchPassword = $password1;
            } 
            $table->username = $request->username;
            $table->email = $request->email;
            $table->password = Hash::make($matchPassword);
            $table->photo = '';
            $table->description = '';
            $table->balance = 0;
            $table->save();

            return response()->json(['message' => 'Registration successfully']);
        }
    }

    public function update($id){
        $table = Users::find($id);
        $table->username = $request->username;
        $table->password = Hash::make($request->password);
        $table->description = $request->description;
        $table->photo = $request->photo;
        $table->update();
    }
}
