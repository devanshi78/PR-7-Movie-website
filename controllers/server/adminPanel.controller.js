import Movie from '../../models/movie.model.js';
import fs from 'fs';

export const dashboard = (req,res) => {
    return res.render('./server/index.ejs')
}

export const addMoviePage = (req,res) => {
    return res.render('./server/pages/addMovie.ejs');
}

export const viewMoviePage = (req,res) => {
    return res.render('./server/pages/viewMovie.ejs');
}

export const addMovie = async(req,res) => {
    try {
        req.body.image = req.file.path;
        let data = await Movie.create(req.body);
        console.log(data);
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        return res.redirect(req.get('Referrer') || '/');
    }
}

export const viewMovie = async(req,res) => {
    try {
        const movies = await Movie.find({});
        return res.render('./server/pages/viewMovie.ejs',
        {
            movies
        })
        
    } catch (error) {
        console.log(error.message)
        return res.render('./server/pages/viewMovie.ejs',
        {
            movies:[]
        })
    }
}

export const deleteMovie = async(req,res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);
        await Movie.findByIdAndDelete(id);
        fs.unlinkSync(movie.image);
        return res.redirect('/admin/view-movie');
    } catch (error) {
        console.log(error.message);
    }
}

export const editMoviePage = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    return res.render("./server/pages/editMovie.ejs", { 
        movie 
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const editMovie = async (req,res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id)
        if(req.file){
            try {
                fs.unlinkSync(movie.image)
            } catch (error) {
                console.log(error.message);
            }
            req.body.image = req.file.path;
        }
        await Movie.findByIdAndUpdate(id,req.body);
        
        return res.redirect('/admin/view-movie');
    } catch (error) {
        console.log(error.message);
    }
}