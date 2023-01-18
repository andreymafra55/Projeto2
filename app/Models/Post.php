<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'photo',
        'region',
        'phone',
        'needed',
        'address',
        'description',
        'user_id',
    ];

    public function owner() {
        return $this->hasOne(User::class, 'user_id');
    }
}
