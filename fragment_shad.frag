
#version 330 core
out vec4 FragColor;

in vec2 ourTexCo;

uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;


void main()
{
   FragColor = mix(texture(ourTexture1, ourTexCo), texture(ourTexture2, ourTexCo), 0.2);

}
