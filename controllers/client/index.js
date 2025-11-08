import Movie from "../../models/movie.model.js";

export const homePage = (req,res) =>{
    return res.render('./client/index.ejs');
}

export const about = (req,res) => {
    return res.render('./client/pages/about.ejs');
}

export const contact = (req,res) => {
    return res.render('./client/pages/contact.ejs');
}

export const joinus = (req,res) => {
    return res.render('./client/pages/joinus.ejs');
}

export const review = async(req,res) => {
    let data = await Movie.find({});
    return res.render('./client/pages/review.ejs',{
        data
    });
}

export const single = async (req,res) => {
    try {
        let {id} = req.params;
        let data = await Movie.findById(id);
        return res.render('./client/pages/single.ejs',{
            data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const aboutMovie = (req,res) => {
    return res.render('./client/pages/aboutMovie.ejs');
}