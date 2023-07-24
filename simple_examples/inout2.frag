#version 450


layout (location = 0) in  vec4 inData[10];

in Input1 {
    vec2 p2;
    mat4 p3;
} inblock1;

layout (location = 10) in Input2{
       vec3 p4;
       float p5[4];    
}inblock2;


layout (location = 0) out vec4 outData1[2];
layout (location = 2) out vec2 outData2[2];

void main()
{
    
    outData1[1] = inData[0] +  vec4(inblock1.p2, 1.0f,1.0f) +  inblock1.p3[0];

    outData2[0].x = inblock2.p4.z * inblock2.p5[0];
}