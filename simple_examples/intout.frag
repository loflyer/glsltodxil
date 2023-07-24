#version 450


layout (location = 0) in  vec4 inData[2];

layout(location = 2) in {
    vec4 p1;
    vec2 p2;
    mat3x2 p3;
} inblock1;

// in {
//        int p4 ;
//        float p5[3];
//        mat3 p6;
// }inblock2;


layout (location = 0) out vec4 outData[2];
// out {
//     float m1[2];
//     vec2  m2;
// } outblock1;


// out {
//     mat3 m3;
//     float m4[2];
// } outblock2;


void main()
{
    outData[1].x = inData[1].x + inData[1].y;
    // outblock1.m1[0] = inblock1.p1.x + inblock1.p1.z + inblock1.y *  inblock1.p3[0][0];
    // outblock1.m2 = inblock1.[0];

    // outblock2.m3 =   inblock2.p6;
    // outblock2.m4[0] = (inblock2.p4 + inblock2.p5[0])*inblock2.p5[2];
}