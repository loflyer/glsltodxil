#version 450 core

in vec4  indata;
out vec4 outdata;

uniform UBO0 {
  vec4 a0;
  vec4 b0;
};

layout(std140) uniform UBO1 {
  vec4 a1;
  float b1[3];
};

uniform vec4 c;

void main()
{
  outdata = indata + a0 + a1 * b1[0] +  c;
}