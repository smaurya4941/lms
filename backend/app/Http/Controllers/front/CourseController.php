<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Course as ModelsCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    //this will return all courses for specific user
    public function index(){

    }
        //this mwethod will store /save course in db as draft
    public function store(Request $request){
        //validatoer
        $validator= Validator:: make($request->all,[
            'title'=>'required|min:5'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'error'=>$validator->errors()
            ],400);
            
        }

        //storing course as draft in database
        $course= new ModelsCourse();
        $course->title=$request->title;
        $course->status=0;
        $course->user_id=$request->user()->id;
        $course->save();

        return response()->json([
            'status'=>200,
            'message'=>'Course has been ceated successfully'
        ],200);

    }
}
