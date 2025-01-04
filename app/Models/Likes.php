<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Likes extends Model
{
    /** @use HasFactory<\Database\Factories\LikesFactory> */
    use HasFactory;

    protected $fillable = ['liked_post', 'fan'];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'fan', 'id');
    }

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'liked_post', 'slug');
    }
}
