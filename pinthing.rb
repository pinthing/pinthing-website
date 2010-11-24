require 'rubygems'
require 'sinatra'

get '/' do
  #File.read(File.join('public', 'index.html'))
  "Hello World!"
end
