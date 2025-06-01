import { ModeSelect } from "./ModeSelect";

export default function SettingsContainer() {
    return (

        <div className="p-5 text-content">
            <h2 className="text-3xl font-bold mb-6">Settings Options</h2>
            <h3 className="text-2xl font-semibold mb-3">Dark Mode</h3>
            <ModeSelect />
        </div>
    );
}
