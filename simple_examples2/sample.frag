#version 450 core
 
layout(binding=0) uniform sampler1D tex0;
layout(binding=1) uniform sampler2D tex1[2]; 


out  vec4 result[2];
 
void main()
{
    float coord = 2.0;
    result[0] = texture(tex0, coord);
    result[1] = texture(tex1[1],vec2(1.0f,1.0f));
}
