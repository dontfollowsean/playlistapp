import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect('mongodb://dontfollowsean@ds251819.mlab.com:51819/playlistapp', {
    useMongoClient: true
  })
}
