#version 450 core

layout(location = 0) in flat int attachments;
layout(location = 0) out vec4 colors[3];
void main() {
    float c = 0;
    if(attachments == 1) {
        c = float(attachments - 0);
        colors[0] = vec4(pow(0.5, c));  // colors[0] = 0.5
    }

    if(attachments == 2) {
        c = float(attachments - 0);
        colors[0] = vec4(pow(0.5, c)); // colors[0] = 0.25
        c = float(attachments - 1);
        colors[1] = vec4(pow(0.5, c)); // colors[1] = 0.5
    }

    if(attachments == 3) {
        c = float(attachments - 0);
        colors[0] = vec4(pow(0.5, c)); // colors[0] = 0.125

        c = float(attachments - 1);
        colors[1] = vec4(pow(0.5, c)); // colors[1] = 0.25

        c = float(attachments - 2);
        colors[2] = vec4(pow(0.5, c)); // colors[2] = 0.5
    }
}