<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books', [BooksController::class, 'index']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/create', [CartController::class, 'store']);
Route::post('/cart/{id}', [CartController::class, 'update']);
Route::delete('/cart/delete/{id}', [CartController::class, 'destroy']);
Route::post('/registration', [UsersController::class, 'registration']);
Route::post('/user/{id}', [UsersController::class, 'update']);