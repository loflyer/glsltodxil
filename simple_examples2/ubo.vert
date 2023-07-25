#version 450 core

out vec4 outdata;
out vec4 outdata2;

uniform UBO0 {
  vec2 a0;
  vec2 b0;
}ubo0[2];

layout(std140) uniform UBO1 {
  vec4 a1;
  float b1[3];
}ubo1;

uniform vec4  u4;
uniform int   index;

void main()
{
    outdata  = indata + vec4(ubo0[1].b0, 4.0f, 4.0f);
    outdata2 = vec4(ubo1.b1[2], 1.0f, 1.0f, 1.0f);
    gl_position = vec4(u4.yzw, 8.0f);
}