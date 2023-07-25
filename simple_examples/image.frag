#version 450 core
in vec4 coord;
out vec4 color;

layout(r32f) uniform imageBuffer img7[2]; 
layout(rgba32f) uniform image2DRect img8;


void main()
{
  color = imageLoad(img8, ivec2(1,2));
  imageStore(img8, icoord.xy, coord);
  imageStore(img7[1], icoord.x, coord);
}

