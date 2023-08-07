#version 450 core

out float opt;


layout(binding=0, offset=0) uniform atomic_uint ac;


void main()
{
    opt = 0.0f;
    opt += float(atomicCounter(ac));
}