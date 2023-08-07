#version 450

layout (location = 1) in  vec4 inData1[4];
layout (location = 0) in  vec2 inData2;

out Output1{
    vec2 p2;    // vso[2]
    int  p3;   // vso[0]
} outblock1;

out float p5[3];  // vso[1]

uniform int index;

void main()
{

    outblock1.p2 =  inData2;
    outblock1.p3 =  int(inData1[0].y);
    p5[index] = inData2.x  *  inData2.y;
}
<<<<<<< HEAD
=======


>>>>>>> ad3b04fddb98a52a64496623e9df99c641b5cd96
