#version 450 core

in vec4  indata;
out vec4 outdata;

uniform UBO0 {
  vec4 a0;
  vec4 b0;
}ubo0[2];

uniform UBO1 {
  vec4 a1;
  float b1[3];
}ubo1[2];

uniform vec4 c;

void main()
{
    outdata = indata + ubo0[0].a0 +  ubo1[0].a1 * ubo1[0].b1[0] +  c;
}