#version 450

layout (location = 1) in  vec4 inData1[4];
layout (location = 0) in  vec2 inData2;

out Output1{
    vec2 p2;
    mat4 p3;
} outblock1;


layout( location = 0) out Output2{
       vec3 p4;
       float p5[4];    
}outblock2;


void main()
{

    outblock1.p2 =  inData2;
    outblock1.p3 = mat4 (inData1[0],inData1[1],inData1[2],inData1[3]);

    outblock2.p4  = vec3(1.0f,1.0f,1.0f) ;
    outblock2.p5[0] = inData2.x  *  inData2.y;
}