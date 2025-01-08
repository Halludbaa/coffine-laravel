<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpOption\None;

class PostController extends Controller
{
    public function timelinePage()
    {
        $login = 4;
        $posts = Post::withCount(['likes as user_liked' => fn($query) => $query->where('fan', Auth::id()), 'likes'])
            ->with([
                'users:id,name,created_at,updated_at'
            ])->get();
        //Like status
        foreach ($posts as $post) {
            $post->user_liked = $post->user_liked > 0;
        }

        return Inertia::render('Main/Timeline', [
            "posts" => $posts,
            "pageName" => "Timeline",
            "user_id" => Auth::id(),
        ]);
    }
}
