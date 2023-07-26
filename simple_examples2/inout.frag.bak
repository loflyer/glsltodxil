#version 450


in  vec4 inData[2];
in  vec3 p4;

in Input1 {
    mat4 p3;
    vec2 p2;
} inblock1;

layout (location = 0) out vec4 outData1;

void main()
{
    outData1 = inData[0] * vec4(p4, 2.0f) + vec4(inblock1.p2, 1.0f, 1.0f);
}