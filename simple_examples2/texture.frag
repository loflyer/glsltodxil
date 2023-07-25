#version 460 core
layout(location = 1) in flat ivec4 icoord;
layout(location = 2) in flat ivec4 icoord1;
layout(location = 3) in flat int index;
layout(location = 0) out vec4 color;

layout(binding=1) uniform sampler2D tex1;
layout(binding=0) uniform sampler1D tex8[4];


void main()
{
  
  vec4 temp = vec4(0);
  
  temp += texelFetch(tex1, icoord.xy, icoord1.x);
  temp += texelFetch(tex8[index], icoord.x, icoord1.x);
  
  color = temp;
}

