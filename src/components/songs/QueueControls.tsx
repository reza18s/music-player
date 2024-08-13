import { COLORS } from "@/context";
import { Ionicons } from "@expo/vector-icons";
import { View, ViewProps } from "react-native";
import TrackPlayer, { Track } from "react-native-track-player";
import ButtonOpacity from "../ui/ButtonOpacity";

type QueueControlsProps = {
  tracks: Track[];
} & ViewProps;

export const QueueControls = ({
  tracks,
  style,
  ...viewProps
}: QueueControlsProps) => {
  const handlePlay = async () => {
    await TrackPlayer.setQueue(tracks);
    await TrackPlayer.play();
  };

  const handleShufflePlay = async () => {
    const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);

    await TrackPlayer.setQueue(shuffledTracks);
    await TrackPlayer.play();
  };

  return (
    <View
      style={[{ flexDirection: "row", columnGap: 16 }, style]}
      {...viewProps}
    >
      {/* Play button */}
      <View style={{ flex: 1 }}>
        <ButtonOpacity
          onPress={handlePlay}
          className="flex flex-row items-center justify-center gap-x-8 rounded-lg bg-accent p-3"
          icon={<Ionicons name="play" size={22} color={COLORS.primary} />}
          textClassName="flex text-center text-base font-semibold text-primary"
        ></ButtonOpacity>
      </View>

      {/* Shuffle button */}
      <View style={{ flex: 1 }}>
        <ButtonOpacity
          onPress={handleShufflePlay}
          className="flex flex-row items-center justify-center gap-x-8 rounded-lg bg-accent p-3"
          icon={
            <Ionicons name={"shuffle-sharp"} size={24} color={COLORS.primary} />
          }
          textClassName="flex text-center text-base font-semibold text-primary"
        ></ButtonOpacity>
      </View>
    </View>
  );
};
