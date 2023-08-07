#version 450 core

in ivec4 icoord;

out float opt;

buffer myBuffer {
  float f;
} buf0;

uniform int index;

layout(binding = 1, rgba32f) uniform image2DRect img8[2];
layout(binding =2, offset=0) uniform atomic_uint ac;

void main()
{
    vec4 tmp = imageLoad(img8[index], icoord.zw);
    opt =  tmp.x + buf0.f;
    opt += float(atomicCounter(ac));
}
