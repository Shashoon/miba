import myTheme from "@/assets/theme";
import { PrimaryInputText, PrimaryTextButton } from "@/components";
import { AuthService } from "@/services/authService";
import { createMessage } from "@/src/graphql/mutations";
import { getChat, listMessages } from "@/src/graphql/queries";
import { onCreateMessage } from "@/src/graphql/subscriptions";
import {
  CreateMessageInput,
  GetChatQuery,
  GetChatQueryVariables,
  Message,
} from "@/src/mibaAPI";
import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Observable } from "zen-observable-ts";

const Chats = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([] as Message[]);
  const [currentUser, setCurrentUser] = useState("");

  // chatName need to arrive from the button who created it
  const [chatName, setChatName] = useState("");
  const authService = new AuthService();

  useEffect(() => {
    authService.GetCurrentUser().then((res) => {
      if (res) {
        setCurrentUser(res);
      }
    });

    // Auth.currentUserInfo();

    const getChatName = async () => {
      try {
        const input: GetChatQueryVariables = {
          id: "062e79ab-3663-4ea0-8066-cd8300638021",
        };
        const chat: any = await API.graphql(graphqlOperation(getChat, input));

        setChatName(chat.data.getChat.title);
      } catch (err) {
        console.log(err);
      }
    };

    getChatName();

    const getMessages = async () => {
      try {
        let res: any = await API.graphql(graphqlOperation(listMessages));

        if (res.data.listMessages.items)
          res = res.data.listMessages.items.sort(
            (a: Message, b: Message) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        setMessages(res);
      } catch (err) {
        console.log(err);
      }
    };

    getMessages();

    const subscription = (
      API.graphql(graphqlOperation(onCreateMessage)) as Observable<object>
    ).subscribe({
      next: (eventData: { value: { data: { onCreateMessage: Message } } }) => {
        const newMsg = eventData.value.data.onCreateMessage;
        setMessages((prevMessages) => [...prevMessages, newMsg]);
      },
      error: (error: any) => {
        console.error("Subscription error: ", error);
      },
    });

    return subscription.unsubscribe();

    // implement better solution than currentMessage
  }, [currentMessage]);

  const handleSendMessage = async () => {
    if (!currentMessage.length) return;

    const input: CreateMessageInput = {
      content: currentMessage,
      sender: currentUser.split("@")[0],
      chatID: "062e79ab-3663-4ea0-8066-cd8300638021",
    };

    try {
      await API.graphql(graphqlOperation(createMessage, { input }));
      setCurrentMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text variant="titleMedium">{chatName}</Text>

      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          initialNumToRender={10}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                {
                  alignSelf:
                    currentUser === item.sender ? "flex-end" : "flex-start",
                },
              ]}
            >
              <Text variant="headlineMedium">{item.sender}</Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text variant="bodyMedium">{item.content}</Text>
                <Text
                  variant="bodySmall"
                  style={{ color: myTheme.colors.gray }}
                >
                  {new Date(item.createdAt).toLocaleTimeString()}
                </Text>
              </View>
            </View>
          )}
          contentContainerStyle={{
            padding: 10,
            gap: 10,
          }}
        />
      </View>
      <PrimaryInputText
        value={currentMessage}
        onChangeText={setCurrentMessage}
        placeholder="Start typing..."
        placeholderTextColor={myTheme.colors.lightGray}
        right={<TextInput.Icon icon="send" onPress={handleSendMessage} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 10,
  },
  chatContainer: {
    backgroundColor: myTheme.colors.white,
    borderRadius: 20,
    height: "70%",
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: myTheme.colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    minWidth: "60%",
  },
});

export default Chats;
