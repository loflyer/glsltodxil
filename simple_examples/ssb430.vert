#version 450 core



layout(std430) buffer myBuffer {
  vec4 a;
  uint m[20];
  float f[10];
} buf;

layout(std430) buffer myBuffer2 {
  uint data1[20];
  float data2[10];
};


void main()
{

     buf.a = vec4(1.0f,2.0f,3.0f,4.0f);
     buf.m[0] = 17;
     buf.f[0]= 1.0f;

     data1[0] = 11;
     data2[0]= 13;
     data2[0]= 13;
}
