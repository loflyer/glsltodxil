#version 450


layout (location = 0) in  vec4 inData[2];

in Input1 {
    vec4 p1;
    vec2 p2;
    mat3x2 p3;
} inblock1;

in Input2{
       float p5[4];
       mat3x3 p6;
}inblock2;


layout (location = 0) out vec4 outData1[2];
layout (location = 2) out vec2 outData2[2];

void main()
{
    outData1[1] = inblock1.p1 +  vec4(inblock1.p2,inblock2.p5[0],inblock2.p5[1]) +  vec4(inblock1.p3[0],inblock2.p5[2],inblock2.p5[3]);
    outData2[1] = inblock1.p3[0]; 
}