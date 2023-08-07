#version 450 core
 

buffer Buffer1 {
  vec4 position[2];
} g_input_buffer1;


buffer Buffer2 {
  vec4 position[3];
} g_input_buffer2[3];
 

void main() 
{
  gl_Position = g_input_buffer1.position[1] + g_input_buffer2[2].position[2];
}