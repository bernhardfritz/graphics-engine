#version 300 es

in vec3 a_position;
in vec3 a_color;

out vec3 v_color;

void main() {
    v_color = a_color;
    gl_Position = vec4(a_position, 1.0f);
}