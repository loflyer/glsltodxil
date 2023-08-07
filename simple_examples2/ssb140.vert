#version 450 core

uniform vec3 udata3;

layout(std140) buffer myBuffer {
  vec4 a;
  uint m[4];
  vec3 v3;
} buf;

layout(std430) buffer myBuffer2 {
  vec3 b2v3;
  float f[4];
  vec4 data4;
};


void main()
{
     buf.a    = vec4(1.0f,2.0f,3.0f,4.0f);
     buf.m[1] = 17;
     buf.v3   = udata3;

     data4    = vec4(b2v3, f[2]);
}
