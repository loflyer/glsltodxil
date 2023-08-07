#version 450 core
layout(location = 0) in flat int attachments;
layout(location = 0) out vec4 colors[3];


void main() {
    for(int a = 0; a < attachments; ++a) {

        float c = float(attachments - a);
        colors[a] = vec4(pow(0.5, c));
    }
}
