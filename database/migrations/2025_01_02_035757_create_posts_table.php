<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id('slug');
            // $table->unsignedBigInteger('users_id');
            // $table->foreign('users_id')->references('id')->on('users')
            //     ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('users_id')->constrained(table: 'users', column: 'id')->onDelete('cascade');
            $table->text('body');
            $table->timestamps();
        });

        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('liked_post')->constrained(table: 'posts', column: 'slug')->onDelete('cascade');
            $table->foreignId('fan')->constrained(table: 'users', column: 'id')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('marked_post')->constrained(table: 'posts', column: 'slug')->onDelete('cascade');
            $table->foreignId('user')->constrained(table: 'users', column: 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
        Schema::dropIfExists('likes');
    }
};
