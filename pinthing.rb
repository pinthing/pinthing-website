require 'rubygems'
require 'sinatra'

get '/' do
  File.read(File.join('public', 'pinthing.html'))
end
