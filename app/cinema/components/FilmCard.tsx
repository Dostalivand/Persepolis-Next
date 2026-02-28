import FilmCardStyle from "@/app/cinema/components/FilmCardStyle";
import FilmCardFirstData from "@/app/cinema/components/data/FilmCardFirstData";

export default function FilmCard({ items = FilmCardFirstData }) {
    return (
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-3">
            {items.map((m, i) => (
                <FilmCardStyle key={i} movie={m} />
            ))}
        </div>
    );
}