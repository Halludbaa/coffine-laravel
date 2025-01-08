<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Marks extends Model
{
    /** @use HasFactory<\Database\Factories\MarksFactory> */
    use HasFactory;

    protected $fillable = ['marked_post', 'user'];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user', 'id');
    }

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'marked_post', 'slug');
    }
}
