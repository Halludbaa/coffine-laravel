<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marks extends Model
{
    /** @use HasFactory<\Database\Factories\MarksFactory> */
    use HasFactory;

    protected $fillable = ['marked_post', 'user'];
}
